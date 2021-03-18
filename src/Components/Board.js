import React, {Component} from 'react';
import Square from './Square';

class Board extends React.Component {
//     handleClick(i) {
//        //slice() used to create a copy of the squares array after every move
//        //and is treated as immutable;e (original array is not modified)
//        const history = this.state.history;
//        const current = history[history.length - 1];
//        const squares = current.squares.slice();
//        if (calculateWinner(squares) || squares[i]) {
//            return;
//        }
//        squares[i] = this.state.xIsNext ? 'X' : 'O';
//        this.setState({
//            history: history.concat([{
//            squares: squares,
//              }]),
//            xIsNext: !this.state.xIsNext,
//        });
//    }
   
   renderSquare(i) {
     return (
     <Square 
     value={this.props.squares[i]} 
     onClick={()=> this.props.onClick(i)}/>
     );
   }

   render() {
     return (
       <div>
         <div className="board-row">
         {this.renderSquare(0)}
         {this.renderSquare(1)}
         {this.renderSquare(2)}
       </div>
       <div className="board-row">
         {this.renderSquare(3)}
         {this.renderSquare(4)}
         {this.renderSquare(5)}
       </div>
       <div className="board-row">
         {this.renderSquare(6)}
         {this.renderSquare(7)}
         {this.renderSquare(8)}
       </div>
     </div>
     );
   }
}
export default Board;