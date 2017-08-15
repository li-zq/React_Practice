import Bundle from "./Bundle.jsx";

import _CommonMenu from "bundle-loader?lazy&name=commonmenu!../common/commonmenu/commonmenu.jsx";
import _Login from "bundle-loader?lazy&name=login!../components/login/login.jsx";
import _ProjectManage from "bundle-loader?lazy&name=projectManage!../components/projectManage/projectManage.jsx";
import _AppManage from "bundle-loader?lazy&name=appManage!../components/appManage/appManage.jsx";
import _SysManage from "bundle-loader?lazy&name=sysManage!../components/sysManage/sysManage.jsx";
import _ShowPlugin from "bundle-loader?lazy&name=showPlugin!../components/showPlugin/showPlugin.jsx";


export class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_Login}>
				{(Components)=> <login><Components {...this.props}/></login>}
			</Bundle>
		)
	}
}
export class CommonMenu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_CommonMenu}>
				{(Components)=> <common_menu><Components {...this.props}/></common_menu>}
			</Bundle>
		)
	}
} 
export class ProjectManage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_ProjectManage}>
				{(Components)=> <project_manage><Components {...this.props}/></project_manage>}
			</Bundle>
		)
	}
} 
export class AppManage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_AppManage}>
				{(Components)=> <app_manage><Components {...this.props}/></app_manage>}
			</Bundle>
		)
	}
} 
export class SysManage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_SysManage}>
				{(Components)=> <app_manage><Components {...this.props}/></app_manage>}
			</Bundle>
		)
	}
}
export class ShowPlugin extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Bundle load={_ShowPlugin}>
				{(Components)=> <show_plugin><Components {...this.props}/></show_plugin>}
			</Bundle>
		)
	}
}