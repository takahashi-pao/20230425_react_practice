import React, { Component } from "react";

/**
 * 平易なTodoリスト作成クラス
 */
export default class Todo2 extends Component {
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
            <div>
                <input type="text" onInput={this.onInput} />
                <button onClick={this.addTodo}>Resister</button>
                <ul>
                    { todos.map((todo, index) => 
                    <li key={index}>
                        {todo}
                        <button onClick={ () => {this.removeTodo(index)}}>Delete</button>
                    </li>) }
                </ul>
            </div>
        );
    }
}