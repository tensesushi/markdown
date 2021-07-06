const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- item uno
- item duo 
- item suo

### links

[RTVNoord](www.rtvnoord.nl "Meer nieuws dan nodig")

### Dikke scheve tekst jong

*schaif*
**dik**
***dik en schaif***

### Dikke ploatjes mien jong!

![as t nait lukken wil](https://www.radio.de/images/broadcasts/e1/36/11834/c300.png "Roadio Noord")

### Blockquote

> Wadapatja!

### Code

\`npm install create-react-app -g\`

\`\`\`
function bananenBrood(bananen, brood) {
    return bananen + brood
}
\`\`\`
`

marked.setOptions({
    breaks: true
})

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            markdown: initialMarkdown
        }
    }

    handleChange = e => this.setState({markdown: e.target.value})

    render() {
        return (
            <div>
                <h1>Markdown Previewer</h1>
                <div className="container">
                    <div className="left">
                        <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} />
                    </div>
                    <div className="right">
                        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))