const Cartoon = (props) => {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Year: {props.year}</p>
            <img src={props.imageUrl} />
        </>
    )
}

export default Cartoon;
