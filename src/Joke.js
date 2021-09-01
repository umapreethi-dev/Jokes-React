function Joke(props){
    return(
      <div>
       
       <ul>
    <li>{props.question}</li>
    {props.punchLine}
       </ul>
      </div>
    )
}

export default Joke;