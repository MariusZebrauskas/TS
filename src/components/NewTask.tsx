import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
interface Props {
  postData: {
    body: string;
    id: number;
    title: string;
    userId: number;
  }[];
  setPostData: React.Dispatch<
    React.SetStateAction<
      {
        body: string;
        id: number;
        title: string;
        userId: number;
      }[]
    >
  >;
  calcData: Function;
}
const NewTask = ({ postData, setPostData, calcData }: Props) => {
  const addPost = () => {
    setPostData([
      ...postData,
      { id: postData.length + 1, body: 'new posts ', title: 'new title', userId: 2 },
    ]);
  };
  console.log(calcData(7))
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      {postData &&
        postData.map((post) => (
          <Paper sx={{ boxShadow: 10 }} key={post.id}>
            <Typography sx={{ margin: '2rem' }} variant='body2'>
              {post.body}
            </Typography>
          </Paper>
        ))}
      <Button variant='outlined' onClick={addPost}>
        add post
      </Button>
    </Box>
  );
};

export default NewTask;
