import {
  Box,
  Typography,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

function AnimeDetail() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid white",
          borderRadius: 2,
          boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
          m: 8,
          p: 2,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
        >
          Maougun Saikyou no Majutsushi wa Ningen datta
        </Typography>

        <Divider color="white" sx={{ mb: 2 }} />

        <Grid container spacing={3} sx={{ alignItems: "flex-start" }}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                border: "1px solid white",
                borderRadius: 2,
                boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
                p: 1,
              }}
            >
              <Box
                component="img"
                src="https://cdn.myanimelist.net/images/anime/1814/143744.jpg"
                alt="Maougun"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={8}>
            <TableContainer
              component={Paper}
              sx={{
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1px solid white",
                borderRadius: 2,
                boxShadow: "16px 11px 15px 0px rgba(0,0,0,0.75);",
                p: 1,
              }}
            >
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Judul</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Maougun Saikyou no Majutsushi wa Ningen datta
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Japanese</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      魔王軍最強の魔術師は人間だった
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Skor</TableCell>
                    <TableCell sx={{ color: "white" }}>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Produser</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Pony Canyon, Bit groove promotion
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Tipe</TableCell>
                    <TableCell sx={{ color: "white" }}>TV</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Status</TableCell>
                    <TableCell sx={{ color: "white" }}>Ongoing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Total Episode</TableCell>
                    <TableCell sx={{ color: "white" }}>Unknown</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Durasi</TableCell>
                    <TableCell sx={{ color: "white" }}>23 Min</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Tanggal Rilis</TableCell>
                    <TableCell sx={{ color: "white" }}>Jul 03, 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Studio</TableCell>
                    <TableCell sx={{ color: "white" }}>A-CAT</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Genre</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Action, Adventure, Fantasy, Isekai, Reincarnation
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ color: "#fff", textAlign: "justify" }}>
            Ike, iblis yang terkenal sebagai "Penyihir terkuat pasukan Raja
            Iblis" yang mampu mengalahkan benteng musuh sendirian. Dia
            menghancurkan musuh-musuhnya dengan kekuatan sihir yang luar biasa.
            Dia seperti “monster” yang menakutkan bagi musuh, bahkan bagi
            temannya sendiri. Namun, ia menyimpan rahasia yang tidak akan pernah
            terungkap oleh iblis lain bahwa ia sebenarnya adalah seorang
            manusia.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
            Daftar Episode
          </Typography>

          <Grid container spacing={2}>
            {[
              {
                episode: "#01",
                title: "Kehidupan Santai di Dunia Lain",
                thumbnail:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfrgEhspZvNeNab07Ermezmt71IPwAnje4g&s",
              },
              {
                episode: "#02",
                title: "Kekuatan Sihir Terhebat",
                thumbnail:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUj_XhumQSQfxwUHcfX0yTERJOTjWjUquBA&s",
              },
              {
                episode: "#03",
                title: "Petualangan Baru",
                thumbnail:
                  "https://i.ytimg.com/vi/omfBPma33HQ/maxresdefault.jpg",
              },
              {
                episode: "#04",
                title: "Pertarungan dengan Raja Iblis",
                thumbnail:
                  "https://i.ytimg.com/vi/LLgkmRP1qYk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5NgMFXtqaOUoKYlmYI6M4-JGLvA",
              },
              {
                episode: "#05",
                title: "Rahasia Kekuatan",
                thumbnail:
                  "https://i.ytimg.com/vi/UIMg1L73jF4/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHOBoAC4AOKAgwIABABGH8gOShmMA8=&rs=AOn4CLCNRYGyEo0gCAXDfWIOd5H6PZ7FcA",
              },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                key={index}
                gap={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  borderRadius: 2,
                  p: 1,
                  ml: 2,
                  mt: 2,
                  boxShadow: "2px 4px 6px rgba(0,0,0,0.5)",
                }}
              >
                <Box
                  component="img"
                  src={item.thumbnail}
                  alt={`Episode ${item.episode}`}
                  sx={{ width: 100, borderRadius: 2 }}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>
                    {item.episode}
                  </Typography>
                  <Typography sx={{ color: "white" }}>{item.title}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AnimeDetail;
