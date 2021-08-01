import {useState}  from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';

export default function useTestimonials(status) {
      let API_URL='';
      if(process.env.NODE_ENV === 'development'){
          API_URL = process.env.REACT_APP_LOCAL_API_URL;
      }else{
          API_URL = process.env.REACT_APP_LIVE_API_URL;
      }
    const [intervalMs] = useState(1500)
    return useQuery('testimonials', async () => {
      const result = await axios.get(`${API_URL}testimonial/view-all/testimonials/${status}`,{
            headers: {
                  'Content-Type': 'Application/json'
            }
      });
      return result.data.data; 
    },{
      refetchInterval: intervalMs
    });
}
