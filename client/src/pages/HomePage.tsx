import LinkButton from "../components/LinkButton"
import {motion} from 'framer-motion'

function HomePage() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="row sect-1">
        <div className="col">
          <h1 className="text-center position-absolute top-50 start-50 translate-middle">
            The platform for <span className="gradient-text">rocketeers</span> <br /> made by <span className="gradient-text">rocketeers</span> <br /> 🚀
            <br />
            <LinkButton to="/register" bs_classes="mt-3">Register Now</LinkButton>
          </h1>
        </div>
      </div>
      <hr />
      <div className="row mt-5 mb-5">
        <div className="col card_ rounded-5 m-2 p-4">
          <h5>Get all the latest rocket updates on one single platform <br />  
            <div className="text-center mt-3">
            <LinkButton to="/updates" > Updates </LinkButton> 
            </div>
          </h5>
        </div>
        <div className="col card_ rounded-5 m-2 p-4">
          <h5>Compete with the brightest rocketeers on our leaderboard <br />  
            <div className="text-center mt-3">
            <LinkButton to="/updates" > Leaderboard </LinkButton> 
            </div>
          </h5>
        </div>
        <div className="col card_ rounded-5 m-2 p-4">
          <h5>Get all the latest rocket updates on one single platform <br />  
            <div className="text-center mt-3">
            <LinkButton to="/updates" > Updates </LinkButton> 
            </div>
          </h5>
        </div>
        <div className="col card_ rounded-5 m-2 p-4">
          <h5>Get all the latest rocket updates on one single platform <br />  
            <div className="text-center mt-3">
            <LinkButton to="/updates" > Updates </LinkButton> 
            </div>
          </h5>
        </div>
      </div>
    </motion.div>
  )
}

export default HomePage