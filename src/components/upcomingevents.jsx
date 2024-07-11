import PropTypes from 'prop-types'

const nextEvent = [
    {
      photoName: " Pic/section5.jpg",
      message: "Melon soup with vegetable and fufu",
    },
    // {
    //   photoName: "Pic/section1.jpg",
    //   message:
    //     "Eba and Oha soup with assorted meat, beef, shaki and dried fish, decorated with green leaf and sliced yellow pepper",
    // },
    // {
    //   photoName: "Pic/section2.jpg",
    //   message: "Traditional Seasoned dishes - Special Selection...",
    // },
  ];

  function UpcomingEvent(){
    return(
        <NextEventUl/>
    )
  };
  
  function NextEventUl() {
    const eventFlex = {
      listStyleType: "none",
      position: "relative",
    };
  
    return (
      <div className="py-12 mb-12">
        <ul style={eventFlex} className='w-full lg:flex md:flex '>
          {nextEvent.map((event =>(
            <NexteventList eventObj ={event} key={event.message}/>
          )))}
        </ul>
        
      </div>
    );
  };

  function NexteventList({eventObj}){
    const pStyle ={
        margin: "0",
        border: "2px solid green",
        height: "5rem",
    padding: "4px",
    color: "white",
    fontSize: "16px",
    background: "rgba(0, 0, 0, 0.5)",

    }
    return(
        <li className="w-full lg:m-0 sm:m-0">
      <img
        src={eventObj.photoName}
        alt={eventObj.photoName}
        className="  w-full h-full  border-2 rounded-2xl"
      />
       <div
        className="sm:hidden lg:block overflow-hidden"
        style={{
        // position: "relative",
        // bottom: "30px",
           
          textAlign: "center",
        }}
      >
     <p style={pStyle}>{eventObj.message}</p>
      </div>
      </li>

    
    )
  }
  NexteventList.propTypes = {
    eventObj: PropTypes.shape({
      photoName: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default UpcomingEvent;