export const tabbar = [{
		name: '首页',
		icon: '/static/tabbar/index.png',
		iconSelected: '/static/tabbar/index-selected.png',
		path: 'pages/index/index',
		choose: false
	},
	{
		name: '我的',
		icon: '/static/tabbar/mine.png',
		iconSelected: '/static/tabbar/mine-selected.png',
		path: 'pages/login/login',
		choose: false
	}
]


export const getPagesPath = () => {
	let pages = getCurrentPages()
	let thisPage = pages[pages.length - 1].route;
	tabbar.forEach((item) => {
		if(thisPage === item.path){
			item.choose = true;
		}else{
			item.choose = false;
		}
		return item.path
	});
}