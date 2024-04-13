import { aboutTeam } from '../../allLists'

export default function AboutTeam() {
  return (
    <div className='about_team'>
     {aboutTeam.map(team =>{
        return <div className="team_item" key={team.id} data-aos="fade-up">
        <img alt='' src={team.picture}></img>
          <h2>{team.name}</h2>
          <h3>{team.position}</h3>
          <p>{team.text}</p>
        </div>
        
     })}    
    </div>
  )
}
