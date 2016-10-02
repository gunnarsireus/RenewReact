import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import PagaendeActions from '../actions/PagaendeActions';

export default class IssueListView extends Component {
    displayName: 'IssueListView';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return  <div>
        <Row id="issue-list-view" style={{display:this.displayStyle()}}>		
			<Col md={12}>
				<table id="issuelist-table" className="table table-striped table-hover">
					<thead>
						<tr>
							<th>                     
							</th>
							<th>ID</th>
							<th>                     
							</th>
							<th>Prio</th>
							<th>Titel</th>
							<th>                     
							</th>
							<th>Adress</th>
							<th>                     
							</th>
							<th>Tilldelad</th>
							<th>                    
							</th>
							<th>                     
							</th>
							<th>                     
							</th> 
							<th>                    
							</th>
							<th>                     
							</th>
						</tr>
					</thead>
					<tbody></tbody>
					<tfoot>
						<tr>
							<th>                    
							</th>
							<th>ID</th>
							<th>                     
						    </th>
							<th>Prio</th>
							<th>Titel</th>
							<th>                     
							</th>
							<th>Adress</th>
							<th>                     
							</th>
							<th>Tilldelad</th>
							<th>                    
							</th>
							<th>                     
							</th>
						    <th>                     
							</th>
							<th>                    
							</th>
							<th>                     
							</th>
						</tr>
					</tfoot>
				</table>
			</Col>
		</Row>
   </div>
    ;}
};
IssueListView.propTypes= {
    show: React.PropTypes.bool.isRequired
};  