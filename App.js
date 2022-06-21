const root = ReactDOM.createRoot(
  document.getElementById('root')
);

class ReactApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quoteId: 99,
      quoteAuthor: [
        "Bill Gates", 
        "Steve Jobs", 
        "Bill Murray", 
        "Winston S. Churchill", 
        "Colin R. Davis", 
        "Dale Carnegie", 
        "Calvin Coolidge",
        "Mister Rogers",
        "Paulo Coelho",
        "Estée Lauder"
      ],
      quote: [
        '"It’s fine to celebrate success but it is more important to heed the lessons of failure."',  
        '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."', 
        '"I made a lot of mistakes and realized I had to let them go. Don\'t think about your errors or failures, otherwise you\'ll never do a thing."', 
        '"Success is not final; failure is not fatal: It is the courage to continue that counts."', 
        '"The road to success and the road to failure are almost exactly the same."', 
        '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”', 
        '"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan \'Press On\' has solved and always will solve the problems of the human race."',
        '“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”',
        '“When we strive to become better than we are, everything around us becomes better too.”',
       '“I never dreamed about success. I worked for it.”'
      ]
    }
  }
  
  // Randomly generates quoteId
  getRandomQuote = () => {
    let random = this.state.quoteId;
    while (random == this.state.quoteId){
      random = (Math.floor(Math.random() * this.state.quote.length))
    }
    this.setState({quoteId: random});
  }
  
  // calls getRandomQuote on load to randomly generate quote
  
  render() {
    let id = this.state.quoteId
    onload = this.getRandomQuote
    return (
      <div id="quote-box">
        <div id="text">
          <Text text={this.state.quote[id]} />
        </div>
        <div id="author">
          <Author author={this.state.quoteAuthor[id]}/>
        </div>
        <div id="new-quote">
          <button id="but" onClick={this.getRandomQuote}>New Quote</button >
        </div>
        <div >
          <a id="tweet-quote" src target="_blank" href="twitter.com/intent/tweet"><i class="fa fa-twitter"></i></a>
        </div>
      </div>
    );
  }
}       

class Text extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

class Author extends React.Component {
  render() {
    return (
      <h3>-{this.props.author}</h3>
    );
  }
}

root.render(
  <div>
    <ReactApp />
  </div>
);