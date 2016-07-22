function Todo(id) {
	this.ref = $(id);
	this.itemsWrap = $('.todo-items');
	this.completeWrap = $('.complete-wrap');

	this.items = {};
	this.index = 0;
	this.init();
}

Todo.prototype.init = function () {
	var _todo = this;
	var items = this.items;
	var input = $('input');

	// 鼠标进入input文本框文字消失
	input.focusin(function(event){
		if ($(this).val() !== '' && $(this).val() === 'What needs to be done?') {
			$(this).val('');
		}
	});

	// 鼠标移除input文本框文字恢复
	input.focusout(function(event) {
		if ($(this).val() === '') {
			$(this).val('What needs to be done?');
		}
	});
	input.keydown(function(event) {
		if (event.keyCode !== 13 || $.trim($(this).val()) === '') return;
		_todo.add($(this).val());
	});

	// 切换所有todo-item状态
	$('.todo-toggle').click(function(event) {
		if ($(this).hasClass('complete')) {
			for (key in items) {
				if (items[key].isActive) continue;
				items[key].switchStatus();
			}
			$(this).removeClass('complete');
		} else {
			for (key in items) {
				if (!items[key].isActive) continue;
				items[key].switchStatus();
			}
			$(this).addClass('complete');
		}
	});

	// 清空所有的todo-item
	$('.todo-clear').click(function(event) {
		for (key in items) {
			if (!items[key].isActive) {
				_todo.remove(key);
			}
		}
	});

	// 绑定选择视图时间
	$('.todo-filters').click(function(event) {
		var $target = $(event.target);
		var view = 'all';

		if ($target.hasClass('switch-active')) {
			view = 'active';
		} else if ($target.hasClass('switch-complete')) {
			view = 'complete';
		}

		_todo.switchView(view);

		$('.switch').each(function(index, el) {
			$(this).removeClass('current');			
		});

		if (!$target.hasClass('current')) {
			$target.addClass('current')
		}
	});
};

Todo.prototype.add = function (text) {
	var key = 'item' + this.index++;
	var newItem = new TodoItem(key, text, this);
	this.items[key] = newItem;
	this.refresh();
};

Todo.prototype.remove = function (id) {
	$('#' + id).remove();
	delete this.items[id];
	this.refresh();
};

Todo.prototype.switchView = function (view) {
	if (view === 'all') {
		for (id in this.items) {
			$(this.items[id].ref).show();
		}
	} else {
		var activeShow = (view === 'active' ? true : false);
		for (id in this.items) {
			if (this.items[id].isActive === activeShow) {
				$(this.items[id].ref).show();
			} else {
				$(this.items[id].ref).hide();
			}
		}
	}
};
	
Todo.prototype.refresh = function () {
	var activeNum = 0,
		completeNum = 0;

	for (id in this.items) {
		if (this.items[id].isActive) {
			activeNum++;
		} else {
			completeNum++;
		}
	}

	$('.active-num').html(activeNum);
	$('.complete-num').html(completeNum);

	if ($('.complete-num').html() == 0) {
		this.completeWrap.hide();
	} else {
		this.completeWrap.show();
	}
};

function TodoItem(id, text, app) {
	this.ref = null;
	this.id = id;
	this.text = text;
	this.app = app;
	this.isActive = true;

	this.init();
}

TodoItem.prototype.init = function () {
	// 新建todo-item DOM节点
	var item = $('<li class="todo-item" id="' + this.id + '"></li>');
	item.html('<div class="item-status"></div>');
	item.append('<strong class="item-text">' + this.text + '</strong>');
	item.append('<span class="item-delete"></span>');
	this.ref = item;

	// 为ul追加DOM节点
	var _todo = this.app;
	_todo.itemsWrap.prepend(item);

	// 绑定修改todo-item状态事件处理程序
	var _todoItem = this;
	$('#'+ this.id + ' .item-status').click(function(event) {
		var elem = _todo.items[_todoItem.id];
		elem.switchStatus();
	});

	// 绑定删除todo-item事件处理程序
	$('.item-delete').click(function(event) {
		_todo.remove($(this).parent().attr('id'));
	});
};

TodoItem.prototype.switchStatus = function () {
	this.isActive = !this.isActive; //简写法
	if (this.isActive) {
		this.ref.removeClass(' done');
	} else {
		this.ref.addClass(' done');
	}
	this.app.refresh();
};