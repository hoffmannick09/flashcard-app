

export default function CardForm( { changeHandler, front, back }) {
    return (
        <>
        <div>
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            required={true}
            onChange={changeHandler}
            value={front || "" }
            placeholder="Front side of card"
          ></textarea>
        </div>
        <div>
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            required={true}
            onChange={changeHandler}
            value={back || "" }
            placeholder="Back side of card"
          ></textarea>
        </div>
        </>
    );
};