import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarCheck} from "@fortawesome/free-solid-svg-icons";

function Task2() {

    return (
        <div className={'task2__wrapper wrapper'}>
            <h2>Task2</h2>
            <div className={'card'}>
                <div className={'card__content'}>
                    <div className={'card__icon'}>
                        <FontAwesomeIcon icon={faCalendarCheck}/>
                    </div>
                    <div className={'card__text'}>
                        <h3 className={'card__title'}>
                            Request for the lesson
                        </h3>
                        <h4 className={'card__description'}>
                            Daniel Hamilton wants to start a lesson,
                            please confirm or deny the request
                        </h4>
                        <p className={'card__date'}>
                            18 Dec, 14:50pm, 2022
                        </p>

                    </div>
                    <div className={'card__close-btn'}>
                        &#10006;
                    </div>
                </div>
                <div className={'card__buttons'}>
                    <div className={'details btn'}>
                        View details
                    </div>
                    <div className={'submit btn'}>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );

}

export {Task2};