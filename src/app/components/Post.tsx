import Image from 'next/image';
import DotsVerticalIcon from '../../assets/dots-vertical.svg';
import CheckIcon from '../../assets/check.svg';
import HeartIcon from '../../assets/heart.svg';
import MessageIcon from '../../assets/message.svg';
import TieIcon from '../../assets/tie.svg';

type PostProps = {
  avatar: string;
  image: string;
  name: string;
  text: string;
};

function Post({ avatar, image, name, text }: PostProps) {
  return (
    <div
      className="grow-0 flex flex-col py-2 bg-white rounded-xl h-max shadow-md overflow-hidden"
      style={{ width: 550 }}
    >
      <div className="flex justify-between mb-2 pl-2">
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <Image src={avatar} alt={name} width={32} height={32} />
          </div>

          <div className="flex gap-2">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                  <div className="font-semibold text-lg text-black">{name}</div>
                  <div className="flex items-center justify-center bg-pink-600 rounded-full text-white w-3 h-3">
                    <CheckIcon />
                  </div>
                  <div className="">
                    <div
                      className="font-bold text-sm text-pink-600"
                      role="button"
                    >
                      Follow
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-400">36 minutes ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto text-black cursor-pointer" role="button">
          <DotsVerticalIcon width={32} height={32} />
        </div>
      </div>

      <div className="grow mx-auto mb-2 w-max h-max">
        <img
          src={image}
          alt={name}
          style={{ width: 550, height: 300 }}
          className="w-full object-cover"
        />
      </div>

      <div className="px-3">
        <div className="flex justify-between mb-3">
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <div className="text-black cursor-pointer">
                <HeartIcon />
              </div>
              <div className="text-slate-600 text-sm">0</div>
            </div>

            <div className="flex gap-1 items-center">
              <div className="text-black cursor-pointer">
                <MessageIcon />
              </div>
              <div className="text-slate-600 text-sm">0</div>
            </div>

            <div className="flex gap-1 items-center">
              <div className="text-slate-600 text-sm">$0.00 tips</div>
            </div>
          </div>

          <div className="text-black">
            <TieIcon />
          </div>
        </div>

        <div className="font-semibold text-black mb-2">{text}</div>
        <div className="text-sm text-slate-400">Viewed all 0 comments</div>
        <div className="font-bold text-pink-600" role="button">
          Add a comment
        </div>
      </div>
    </div>
  );
}

export default Post;
