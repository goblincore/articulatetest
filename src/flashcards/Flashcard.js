import React from 'react';


export default class Flashcard extends React.Component{

    constructor(props) {
		super(props);
		this.state = {
			toggleFlip:false
		}
    }
    
    handleToggle=()=>{
        const {toggleFlip} = this.state;
        this.setState({
            toggleFlip: !toggleFlip
        })
    }


    render(){
        
        const {source} = this.props;
        const {toggleFlip} = this.state;
        let bgImageStyle;

        if(source.type === "media"){
          bgImageStyle={
                "backgroundImage": `url(${source.imageURL})`
            }
        }

        const flipStyle="block-flashcard--flipped";
        const baseStyle="block-flashcard block-flashcard--small";

        let backStyle ="block-flashcard__center brand--linkColor";
       
        if(source.type==="longtext"){
            backStyle="block-flashcard__center brand--linkColor block-flashcard__center--long block-flashcard__center--long--back block-flashcard__center--overflow";
       
        }
        

       
        return(

            <section onClick={this.handleToggle} className={toggleFlip ? baseStyle+" "+flipStyle : baseStyle} style={toggleFlip ?{"zIndex": "1"} : {"zIndex": "0"}}>
            <div className="block-flashcard__wrapper">
                <div aria-hidden={toggleFlip ? "true" : "false"} className="block-flashcard__front block-flashcard__front--description" role="button" tabIndex={toggleFlip ? "-1":"0"}>
                    <div className="block-flashcard__content brand--border">
                        <div className="block-flashcard__center brand--linkColor" aria-label={source.title}>
                            <div aria-hidden="false" className="block-flashcard__description brand--head brand--linkColor">
                                <div className="fr-view">{source.title}</div>
                            </div>
                        </div>
                    </div>
                    <button className="block-flashcard__flip brand--ui" tabIndex="-1"><span className="flip-text"></span><span className="flip-icon"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" focusable="false"><path fillRule="nonzero" d="M19.347 8.275l1.88 1.714a.727.727 0 0 0 .98-1.074l-3.225-2.941a.727.727 0 0 0-1.027.047l-2.94 3.224a.727.727 0 0 0 1.075.98l1.802-1.976a6.545 6.545 0 0 1-11.56 4.288.727.727 0 1 0-1.114.935 8 8 0 0 0 14.129-5.197zm-16.039.162l-1.79-1.633a.727.727 0 1 0-.98 1.074l3.223 2.94c.297.272.757.25 1.028-.046l2.94-3.224a.727.727 0 0 0-1.075-.98L4.768 8.636a6.545 6.545 0 0 1 11.555-4.482.727.727 0 1 0 1.114-.936A8 8 0 0 0 3.308 8.437z"></path></svg></span></button>
                </div>
                <div aria-hidden={toggleFlip ? "false" : "true"} className="block-flashcard__back block-flashcard__back--fullimage" role="button" tabIndex={toggleFlip ? "0":"-1"}>
                    <div className="block-flashcard__content" style={bgImageStyle}>
                        <div className={backStyle} aria-label={`Flashcard back ${source.content}`}>
                             <div aria-hidden={toggleFlip ? "false" : "true"} className="block-flashcard__description brand--head brand--linkColor">
                                <div className="fr-view">
                                {source.content}
                                </div>
                              </div>
                        </div>
                    </div>
                    <button className="block-flashcard__flip brand--ui" tabIndex="-1"><span className="flip-text"></span><span className="flip-icon"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" focusable="false"><path fillRule="nonzero" d="M19.347 8.275l1.88 1.714a.727.727 0 0 0 .98-1.074l-3.225-2.941a.727.727 0 0 0-1.027.047l-2.94 3.224a.727.727 0 0 0 1.075.98l1.802-1.976a6.545 6.545 0 0 1-11.56 4.288.727.727 0 1 0-1.114.935 8 8 0 0 0 14.129-5.197zm-16.039.162l-1.79-1.633a.727.727 0 1 0-.98 1.074l3.223 2.94c.297.272.757.25 1.028-.046l2.94-3.224a.727.727 0 0 0-1.075-.98L4.768 8.636a6.545 6.545 0 0 1 11.555-4.482.727.727 0 1 0 1.114-.936A8 8 0 0 0 3.308 8.437z"></path></svg></span></button>
                </div>
            </div>
        </section>

        );
    }


}