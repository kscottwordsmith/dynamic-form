import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
import 'font-awesome/css/font-awesome.css'

class Form extends Component {
    state = {
        fields: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/fields').then(resp => {
            this.setState({
                fields: resp.data
            })
        })
    }

    render() {
        let fieldResults = []
        this.state.fields.forEach(field => {
            if (field.type === "text") {
                fieldResults.push(
                    <div className="cont" key={field.id}>
                        <i className={"fa " + field.icon}></i><input type={field.type} placeholder={field.label} id={field.id}/>
                    </div>
                )
            } else if (field.type === "email") {
                fieldResults.push(
                    <div className="cont" key={field.id}>
                        <i className={"fa " + field.icon}></i><input type={field.type} placeholder={field.label} id={field.id}/>
                    </div>
                )
            } else if (field.type === "select") {
                fieldResults.push(
                    <div className="cont" key={field.id}>
                        <select id={field.id}>
                            <option value="select_lang">Select Language</option>
                            {field.options.map((opt, i) => {
                                return <option value={opt.value} key={"option" + i}>{opt.label}</option>
                            })}
                        </select>
                    </div>
                )
            } else if (field.type === "textarea") {
                fieldResults.push(
                    <div className="cont" id="txtar" key={field.id}>
                        <i className={"fa " + field.icon}></i><textarea id={field.id} defaultValue={field.label}></textarea>
                    </div>
                )
            } else if (field.type === "tel") {
                fieldResults.push(
                    <div className="cont" key={field.id}>
                        <i className={"fa " + field.icon}></i><input type={field.type} placeholder={field.label} id={field.id}/>
                    </div>
                )
            }
        })

        return (
            <div id="surround">
                <div id="formHead">Sign Up For My Web App</div>
                <div id="formOutput">{fieldResults}</div>
                <div id="formBot">
                    <button onClick={e => e.preventDefault()}>Submit Form</button>
                </div>
            </div>
        ) 
    }
}

export default Form