export function Launch(props) {
    const {tech} = props;
return(
    <div>
        <h2>  {tech.mission_name}    {tech.launch_year}  </h2>
        <img src={tech.links.mission_patch_small}/>
    </div>
)}

export default Launch ;