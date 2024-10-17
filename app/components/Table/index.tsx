import Image from "next/image";

interface table {
  rank: number;
  userName: string;
  level: number;
  gamesPlayed: number;
  winRate: number;
  status: string;
  imgSrc: string;
}

const tableData: table[] = [
  {
    rank: 1,
    userName: "Secret Girl",
    imgSrc: "/images/Table/avatar1.svg",
    level: 40,
    gamesPlayed: 150,
    winRate: 60,
    status: "Active",
  },
  {
    rank: 2,
    userName: "John Smith",
    imgSrc: "/images/Table/avatar2.svg",
    level: 35,
    gamesPlayed: 200,
    winRate: 55,
    status: "Active",
  },
  {
    rank: 3,
    userName: "Casino King",
    imgSrc: "/images/Table/avatar3.svg",
    level: 38,
    gamesPlayed: 180,
    winRate: 58,
    status: "Active",
  },
  {
    rank: 4,
    userName: "Lucky Lady",
    imgSrc: "/images/Table/avatar4.svg",
    level: 37,
    gamesPlayed: 170,
    winRate: 57,
    status: "Active",
  },
];

const Table = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-40 px-6" id="ranking-section">
        <div className="table-b bg-transparent p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">
            Social Casino Game User Ranking
          </h3>
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-black bg-lightblue ">
                <th className="px-4 py-4 font-normal">#</th>
                <th className="px-4 py-4 text-start font-normal">USER NAME</th>
                <th className="px-4 py-4 font-normal">LEVEL</th>
                <th className="px-4 py-4 font-normal">GAMES PLAYED</th>
                <th className="px-4 py-4 font-normal">WIN RATE</th>
                <th className="px-4 py-4 font-normal">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, i) => (
                <tr key={i} className="border-b border-b-navyblue	">
                  <td className="px-4 py-6 text-center text-white">
                    {user.rank}
                  </td>
                  <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5">
                    <Image
                      src={user.imgSrc}
                      alt={user.imgSrc}
                      height={50}
                      width={50}
                    />
                    {user.userName}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {user.level}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {user.gamesPlayed.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-6 text-center ${
                      user.winRate < 50 ? "text-red" : "text-green"
                    }`}
                  >
                    {user.winRate}%
                  </td>
                  <td
                    className={`px-4 py-6 text-center ${
                      user.status === "Active" ? "text-green" : "text-red"
                    }`}
                  >
                    {user.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
