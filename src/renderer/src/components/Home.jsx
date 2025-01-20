import React from 'react';
import { Outlet, useOutletContext  } from "react-router-dom";
import { Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

function Home() {
   const context = useOutletContext();

   const imgCarousel = [
      {
          src: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/22/6d79d227-67fe-497a-a904-af990882e2ee.jpg.webp?ect=4g'
      },
      {
          src: 'https://images.tokopedia.net/img/NsjrJu/2020/9/25/ea701ee6-f36b-473d-b429-4d2a1da0713d.jpg?ect=4g'
      },
      {
         src: 'https://images.tokopedia.net/img/NsjrJu/2020/9/25/b1d2ed1e-ef80-4d7a-869f-a0394f0629be.jpg?ect=4g'
     }
  ]

  return (
    <>
      <Container>
         <Carousel>
            {
               imgCarousel.map( (item, i) => <img key={i} src={item.src} style={{height: '100%'}}/> )
            }
         </Carousel>
         <Container>
            <Outlet context={context} />
         </Container>
      </Container>
    </>
  )
}

export default Home