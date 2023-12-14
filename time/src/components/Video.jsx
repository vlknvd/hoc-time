import DateTimePretty from "./DateTimePretty";
import DateTime from "./DateTime";

export default function Video(props) {
    const PrettyDateTime = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <PrettyDateTime date={props.date} />
        </div>
    )
}