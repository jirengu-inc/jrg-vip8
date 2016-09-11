var WaterFall={
  			arrColHeight:[],
  			init:function($ct){
  				this.$ct=$ct;
  				this.$items=$ct.find('.item');
  				this.itemWidth=this.$items.outerWidth(true);
  				this.bind();
  				this.start();
  			},
  			bind:function(){
  				var me=this;
  				$(window).on('resize',function(){
  					me.start();
  				});
  			},
  			start:function(){
  				var me=this;
  				this.colNum=Math.floor(this.$ct.width()/this.itemWidth);
  				for(var i=0;i<this.colNum;i++){
  					this.arrColHeight[i]=0;
  				}
  				console.log($);
  				this.$items.each(function(){
  					me.placeItem( $(this) );
  				})
  			},
  			placeItem:function($el){
  				//1.找到arrColHeight的最小值，得到是第几列
  				//2.元素的left的值是 列数*宽度
  				//3.元素top的值是最小值
  				//4.放置元素的位置，把arrColHeight对应的列数的值加上当前元素的高度
				var obj=this.getIndexOfMin(this.arrColHeight),
					idx=obj.idx,
					min=obj.min;
				$el.css({
					left:idx*this.itemWidth,
					top:min
				});
				this.arrColHeight[idx]+=$el.outerHeight(true);
  			},
  			getIndexOfMin:function(arr){
  				var min=arr[0],
  				idx=0;
  				for(var i=1;i<arr.length;i++){
  					if(min>arr[i]){
  						min=arr[i];
  						idx=i;
  					}
  				}
  				return {min:min,idx:idx};
  			}
  		}