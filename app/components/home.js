import React from 'react';
import List from './list';


const Home = React.createClass({
  getDefaultProps: function() {
    return { 
      lists: [
        { 
          id: 1, 
          name: 'Complete the test task for Ruby Garage',
          tasks: [
                { 
                  name: 'Buy a milk', 
                  complete: true 
                },
                { 
                  name: 'Buy a car', 
                  complete: true 
                },
                { 
                  name: 'Go to Ruby Garage', 
                  complete: false 
                }
          ] 
        },
        { 
          id: 2, 
          name: 'second',
          tasks: [
                { 
                  name: 'Crush a plane', 
                  complete: false
                },
                { 
                  name: 'Find the truth', 
                  complete: true 
                }
          ] 
        },
      ] 
    }
  },

  render: function() {
    var listComponents = this.props.lists.map(function(lis) {
      return (
        <List list={lis} key={lis.id} />
      );
    });

    return (
      <div className="home-page">
        <div className="rg-title">
            <h1>SIMPLE TODO LISTS</h1>
            <h3>FROM RUBY GARAGE</h3>
        </div>

        {/*<div *ngFor="let list of lists">
            <rg-list [list]="list"></rg-list>
        </div>*/}
        {listComponents}
        

        <div className="rg-footer">
            <div className="add-list">
              {/*(click)="addList()"*/}
                <button>
                    <div><i className="fa fa-plus" aria-hidden="true"></i></div>
                    <div className="add">Add TODO List</div>
                </button>
            </div>

            <div className="copy">&copy; Ruby Garage</div>
        </div>

        
      </div>
    );
  }
});

export default Home;
