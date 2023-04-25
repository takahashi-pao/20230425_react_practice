import React, { Component } from "react";
import './input.css';

/**
 * 平易なTodoリスト作成クラス
 */
export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            name: ''
        };
    }

    /**
     * 入力値管理メソッド
     * @param {*} e 入力エレメント
     * @abstract 入力エリア入力値をTodoクラスstate.nameに設定する
     */
    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    /**
     * 入力値をリストに追加する
     */
    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    /**
     * リストから任意の要素を排除する
     * @param {*} index 配列番号
     */
    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index+1)]
        });
    }

    /**
     * 描画メソッド
     * @returns 描画対象DOM
     */
    render(){
        // クラスプロパティ
        const { todos } = this.state;

        return (
            <div className="border border-gray-400 rounded-2xl p-2 m-2 justify-around items-center">
                <div className="bg-gray-200 rounded-2xl">
                    <input type="text" onInput={this.onInput}  className="border border-gray-400 pl-1 m-3 w-1/5 ml-2 text-2xl"/>
                    <button onClick={this.addTodo} className="bg-green-300 border-0 p-2 m-3 rounded-md hover:bg-green-400 hover:text-white ml-5 w-1/10">Resister</button>
                </div>

                <ul >
                    { todos.map((todo, index) => 
                    <li key={index} className="">
                        <span className="inline-block pl-1 w-1/5 ml-2">{todo}</span>
                        <button onClick={ () => {this.removeTodo(index)}} className="bg-red-300 border-0 p-2 m-3 rounded-md hover:bg-red-400 hover:text-white ml-5 w-1/10 text-1xl">Delete</button>
                    </li>) }
                </ul>
            </div>
        );
    }
}