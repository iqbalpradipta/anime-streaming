import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import populer from "../../mocks/populer.json";
import ButtonWatch from "../button";

function Populer() {
  return (
    <>
      <Box
        gap={5}
        sx={{
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          padding: "14px 16px",
          justifyContent: "center",
          AlignItems: "center",
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Pagination]}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {populer.map((data, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                sx={{
                  width: 225,
                  height: 317,
                  objectFit: "cover",
                }}
                alt={data.judul}
                src={data.image}
              />
              <Typography variant="h6">{data.judul}</Typography>
              <ButtonWatch />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default Populer;
