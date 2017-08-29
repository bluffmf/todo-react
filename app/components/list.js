import React from 'react';



const List = React.createClass({
    
    getInitialState : function(){
        return {
            editFlag: false,
            over: false
        };
    },

    render: function() {
        return (
            <div className="rg-list">

                {/*(mouseover)="mover()" (mouseout)="mout()"*/}
                <div className="rg-list-header" >
                    <div className="rg-icon">
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                    </div>
                    
{/*https://angulartoreact.com/learning-center/reactjs-development/ng-if-react-equivalent/*/}
                    { ( editFlag => {
                        if (editFlag) {
                            return (
                                <div className="rg-header" >
                                    {/*#newName [(ngModel)]="list.name"*/}
                                    <input type="text" />
                                </div>
                            );
                        } else {
                            return (
                                <div className="rg-header" >
                                    {this.props.list.name}
                                </div>
                            )           
                        }
                    })(this.state.editFlag)}
                    
                    

                    <div className="rg-right">
                        {/*<div [hidden]="!over"><i class="fa fa-pencil" aria-hidden="true" (click)="editList()"></i></div>
                        <hr  [hidden]="!over" class="vertical-line">
                        <div [hidden]="!over"><i class="fa fa-trash-o" aria-hidden="true" (click)="delList()"></i></div>*/}
                    </div>
                </div>

                <div className="rg-list-body">
                    <div className="rg-task-input-name">
                        <div className="rg-icon">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <div className="rg-header">
                            {/*#taskName*/}
                            <input type="text"  placeholder="Start typing here to create a task..." />
                        </div>
                        <div className="rg-right">
                            {/*(click)="addTask(taskName.value)"*/}
                            <button >Add Task</button>
                        </div>
                    </div>


                    {/*<div *ngFor="let task of list.tasks">
                        <rg-task [task]="task" [list]="list"></rg-task>
                    </div>*/}
                    

                    <div className="rg-bottom-radius"></div>
                </div>

            </div>
        );
    }
});

export default List;