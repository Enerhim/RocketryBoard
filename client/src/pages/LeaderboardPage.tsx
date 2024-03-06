import {motion} from 'framer-motion'
import { useState } from 'react'
import { getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { entriesRef } from '../config/firebase'

function LeaderboardPage() {
  const [leaderboardPage, setLeaderboardPage] = useState("All")

  

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="dropdown">
  <button className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {leaderboardPage}
  </button>
  <ul className="dropdown-menu bg-dark text-white">
    <li><a className="dropdown-item text-white" onClick={() => setLeaderboardPage("All")}>All</a></li>
    <li><a className="dropdown-item text-white" onClick={() => setLeaderboardPage("Amateur")}>Amateur</a></li>
    <li><a className="dropdown-item text-white" onClick={() => setLeaderboardPage("SRM")}>SRM</a></li>
    <li><a className="dropdown-item text-white" onClick={() => setLeaderboardPage("LPR")}>LPR</a></li>
    <li><a className="dropdown-item text-white" onClick={() => setLeaderboardPage("HPR")}>HPR</a></li>
  </ul>
</div>
      {
        leaderboardPage === "All" ? 
        <div className="leaderboard">
          <ul className="list-group border-0">
            <li className="list-group-item bg-dark border-0 text-white"><h1>SRM Ranks</h1></li>
            <RankList category='SRM' limit_={3} />
          </ul>
          <ul className="list-group border-0">
            <li className="list-group-item bg-dark border-0 text-white"><h1>HPR Ranks</h1></li>
            <RankList category='HPR' limit_={3} />
          </ul>
          <ul className="list-group border-0">
            <li className="list-group-item bg-dark border-0 text-white"><h1>Amateur Ranks</h1></li>
            <RankList category='Amateur' limit_={3} />
          </ul>
          <ul className="list-group border-0">
            <li className="list-group-item bg-dark border-0 text-white"><h1>LPR Ranks</h1></li>
            <RankList category='LPR' limit_={3} />
          </ul>
        </div>
        : leaderboardPage === "SRM" ? 
        <ul className="list-group border-0">
          <li className="list-group-item bg-dark border-0 text-white"><h1>SRM Ranks</h1></li>
          <RankList category='SRM' limit_={20} />
        </ul>
        : leaderboardPage === "HPR" ? 
        <ul className="list-group border-0">
          <li className="list-group-item bg-dark border-0 text-white"><h1>HPR Ranks</h1></li>
          <RankList category='HPR' limit_={20} />
        </ul>
        : leaderboardPage === "Amateur" ?
        <ul className="list-group border-0">
          <li className="list-group-item bg-dark border-0 text-white"><h1>Amateur Ranks</h1></li>
          <RankList category='Amateur' limit_={20} />
        </ul>
        : leaderboardPage === "LPR" ?
        <ul className="list-group border-0">
          <li className="list-group-item bg-dark border-0 text-white"><h1>LPR Ranks</h1></li>
          <RankList category='LPR' limit_={20} />
        </ul>
        : <h4 className='text-danger'>Invalid Rank</h4>
      }

    </motion.div>
  )
}

export default LeaderboardPage

interface RankListProps  {
  category: "LPR"|"Amateur"|"HPR"|"SRM"
  limit_: 3|20
}

function RankList({category, limit_} : RankListProps) {
  
  const q = query(entriesRef, where("verified" ,"==", true), where("category", "==", category), limit(limit_) , orderBy("time","asc"))
  const getEntries = async() => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    });
  }
  {getEntries()}
  return (
    <Rank/>
  )
}

function Rank() {
  return (
    <li className="list-group-item bg-dark text-white border-0 border-bottom border-top">An item</li>
  )
}
