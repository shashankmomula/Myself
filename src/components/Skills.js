
import 'tailwindcss/tailwind.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,FaCuttlefish, FaPlus, FaNodeJs } from 'react-icons/fa';
import { DiCplusplus, DiC } from 'react-icons/di';
import { IoCodeWorking, IoSettings } from 'react-icons/io5';

const skills = [
  { name: 'C', icon: <FaCuttlefish  className="text-blue-600" />, level: '90%' },
  // { name: 'C++', icon:  level: '70%' },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: '90%' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, level: '85%' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-300" />, level: '70%' },
  { name: 'React', icon: <FaReact className="text-blue-600" />, level: '75%' },
  { name: 'Java', icon: <FaJava className="text-sky-800" />, level: '75%' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: '80%' },

  
  // { name: 'DSA', icon: <IoCodeWorking />, level: '40%' },
];

const Skills = () => {
  return (
    <section id="skills" className="my-8 m-11">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="text-4xl mr-4 cursor-pointer">
              {skill.icon}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-300 h-2.5 rounded-full cursor-pointer" style={{ width: skill.level }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
