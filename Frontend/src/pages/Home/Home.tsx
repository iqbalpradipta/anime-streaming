import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner from "../../mocks/banner.json";
import Populer from "../../components/home/populer";
import Trending from "../../components/home/trending";
import Ongoing from "../../components/home/ongoing";

function Home() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          padding: "14px 16px",
          mt: 1,
          borderRadius: 2,
          boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
        }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {banner.map((data, index) => (
            <SwiperSlide key={index}>
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  display: "flex",
                  left: 65,
                  bottom: 130,
                  color: "white",
                }}
              >
                {data.judul}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  display: "flex",
                  left: 70,
                  bottom: 100,
                  color: "white",
                }}
              >
                Genre: {data.genre}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  position: "absolute",
                  display: "flex",
                  left: 70,
                  bottom: 50,
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid black",
                  "&:hover": {
                    border: "1px solid white",
                    backgroundColor: "black",
                    color: "white",
                  },
                  boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
                }}
              >
                Watch Now !
              </Button>
              <Box
                component="img"
                sx={{
                  width: 1200,
                  height: 480,
                  objectFit: "containt",
                }}
                alt={data.judul}
                src={data.imgae}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Typography variant="h6" mt="10px" p="10px">
        Populer
      </Typography>
      <Populer />
      <Typography variant="h6" mt="10px" p="10px">
        Anime Trending
      </Typography>
      <Trending />
      <Typography variant="h6" mt="10px" p="10px">
        Anime Ongoing
      </Typography>
      <Ongoing />
    </>
  );
}

export default Home;
