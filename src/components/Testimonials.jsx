import PropTypes from 'prop-types';
import Starrating from '../../public/Pic/star-rating.svg'

const testimonialItems =[
    {
        photoName: "Pic/opal.jpg",
        message:"This has been one of the best competitions I participated in",
    },
    {
        photoName: "Pic/opal.jpg",
        message:"Opal Rumble 1.0 was an amzing experience to learn and grow. My team was among th winners",
    },
    {
        photoName: "Pic/opal.jpg",
        message:"I am thankful to the organizers for putting this competition together and conducting it with all fairness",
    },
]


function Testimonial(){
    return(
        <TestimonialUl/>
    )
};
function TestimonialUl(){
    const testimonialFlex = {
        listStyleType :"none",
        position: "relative",
    }
    return(
        <div>
            <ul style={testimonialFlex} className="gap-3 md:flex lg:flex" >
                {testimonialItems.map((items =>(
                    <TestimonialList itemsObj={items} key={items.message}/>
                )))}
            </ul>
        </div>
    )
}
function TestimonialList({itemsObj}){
    return(
        <div className='mb-12 py-12 transform  hover:scale-95 transition-transform duration-300'>
           <img src={itemsObj.photoName} alt="" 
           className="w-1/3 rounded-full "/>
           <p>{itemsObj.message}</p>
            <img src={Starrating} alt="" />
        </div>
    )
}

TestimonialList.propTypes={
    itemsObj: PropTypes.shape({
        photoName: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
      }).isRequired,
}
export default Testimonial;