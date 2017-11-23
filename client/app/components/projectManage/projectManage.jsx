import "./projectManage.less";

export default class ProjectManage extends React.Component{
	constructor(props){
		super(props);
		this.list = [
			{
				name: 'xxx0',
				otherName: 'x3',
				creator: 'li-zq',
				creatTime: '2017-04-20',
				desc: 'Just some practice'
			},
			{
				name: 'xxx1',
				otherName: 'x3',
				creator: 'li-zq',
				creatTime: '2017-04-20',
				desc: 'Just some practice'
			},
			{
				name: 'xxx2',
				otherName: 'x3',
				creator: 'li-zq',
				creatTime: '2017-04-20',
				desc: 'Just some practice'
			},
			{
				name: 'xxx3',
				otherName: 'x3',
				creator: 'li-zq',
				creatTime: '2017-04-20',
				desc: 'Just some practice'
			},
			{
				name: 'xxx4',
				otherName: 'x3',
				creator: 'li-zq',
				creatTime: '2017-04-20',
				desc: 'Just'
			}
		]
		this.Tr = this.list.map((item, index)=>
            		<tr key={item.name+index}>
                		<td>{item.name}</td>
                		<td>{item.otherName}</td>
                		<td>{item.creator}</td>
                		<td>{item.creatTime}</td>
                		<td>{item.desc}</td>
                		<td>
                    		<button className="btn btn-primary btn-sm">详情</button>
                    		<button className="btn btn-danger btn-sm" style={{marginLeft: '6px'}}>删除</button>
                		</td>
            		</tr>
			     )
	}
	render(){
		return (
			<div className='page'>
				<div className="content">
					<div className="content-title">
						<div className="form-horizontal col-md-12">
							<div className="form-group">
								<span className="control-label pull-left">项目名称</span>
								<div className="col-md-3">
									<input className="form-control"/>
								</div>
								<button className="btn btn-primary">查询</button>
							</div>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="content-conter">
						<table className="table table-center table-hover ">
			                <thead className="table-bordered noresult">
			                    <tr>
			                        <th className="col-md-2">项目名</th>
			                        <th className="col-md-2">别名</th>
			                        <th className="col-md-2">创建人</th>
			                        <th className="col-md-1">创建时间</th>
			                        <th className="col-md-2">描述</th>
			                        <th className="col-md-3">操作</th>
			                    </tr>
			                </thead>
			                <tbody className="table-bordered noresult">
			                    {this.Tr}
			                    {!this.list.length && <tr>
			                    	<td colSpan="6" style={{textAlign: 'center'}}>
			                     		<i className="glyphicon glyphicon-remove"></i>您查询的条件错误或查询的结果不存在
			                     	</td>
			                    </tr>}
			                </tbody>
            			</table>
					</div>
				</div>
			</div>
		)
	}
}