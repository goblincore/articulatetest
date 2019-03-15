import React from 'react';
import Flashcard from './Flashcard';


export default class Flashcards extends React.Component{

    //Flashcards is a component that takes in an array of structured data
    //and then outputs individual flashcard components from them


    render(){
        const {source} = this.props;
        const cardList = source.map(card => <Flashcard key={card.id} source={card}/> )
        return(
            <div aria-label="Flashcard grid" className="block-flashcards blocks-flashcard--column" style={{"paddingTop": "30px", "paddingBottom": "30px"}}>
                 <div className="block-flashcards__wrapper">
                    <div>
                    {cardList}
                    </div>
                </div>
          </div>
        );
    }

}