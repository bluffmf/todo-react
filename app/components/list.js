import React from 'react';



const List = React.createClass({
    render: function() {
        return (
            <div className="rg-list">

                {/*(mouseover)="mover()" (mouseout)="mout()"*/}
                <div className="rg-list-header" >
                    <div className="rg-icon">
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                    </div>
                    
                    {/**ngIf="!editFlag"*/}
                    <div className="rg-header" >
                        {/*{{list.name}}*/}
                    </div>            

                    {/**ngIf="editFlag"
                    #newName [(ngModel)]="list.name"
                    */}
                    <div className="rg-header" >
                        <input type="text" />
                    </div>

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