import moment from 'moment'

const DateTimePretty = (Component) => {
    return function (props) {
      return <Component {...props} date={moment(props.date).fromNow()} />;
    };
};

export default DateTimePretty