import { useEffect, useReducer } from 'react';
import Post from '../components/Post';
import Header from './FirstPage/Header';
import { reducer } from './FirstPage/reducer';
import { PostType } from './FirstPage/PostType';

const POST_DATA = {
  avatar:
    'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
  image:
    'https://images.unsplash.com/photo-1682685795463-0674c065f315?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1NTg0NjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNzM4OTM0NHw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
  name: 'lorem-ipsum',
  text: 'lorem-ipsum',
};

const POSTS = [POST_DATA, POST_DATA, POST_DATA, POST_DATA, POST_DATA];

// approach was to use
// const initialValues = {
//   hasError: false,
//   isLoading: true,
//   posts: [POST_DATA, POST_DATA, POST_DATA, POST_DATA],
// };

// const [{ isLoading, hasError, posts }, dispatch] = useReducer(
//   reducer,
//   initialValues
// );

function FirstPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <div className="grow flex flex-col items-center gap-2 justify-center gap-3 pt-2 pb-4 bg-slate-100">
        {POSTS && POSTS.map((post, index) => <Post key={index} {...post} />)}
        {/* {hasError && <div>Failed to failed data</div>} */}
      </div>
    </div>
  );
}

export default FirstPage;
