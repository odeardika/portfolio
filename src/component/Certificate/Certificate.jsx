import React from 'react';
import style from './Certificate.module.css';
import AchievementCard from './CertificateCard';
import bangkitImg from '../../assets/certificate/bangkit.jpg';
import courseraTFDD from '../../assets/certificate/TensorFlow_Data_and_Deployment.jpg';
import dicodingDasarWeb from '../../assets/certificate/Dasar Web - Dicoding.jpg';
import courseraDLTF from '../../assets/certificate/DeepLearningTF.jpg';
import courseraML from '../../assets/certificate/CourseraML.jpg';
import dicodingGit from '../../assets/certificate/Dasar Git.jpg';

const certificateList = [{id : 1, img : bangkitImg, title : "Bangkit Machine Learning Completion Certificate"},
                         {id : 2, img : courseraTFDD, title : "Coursera TensorFlow: Data and Deployment Certificate"},
                         {id : 3, img : dicodingDasarWeb, title : "Dicoding Basics of Web Programming Certificate"},
                         {id : 4, img : courseraDLTF, title : "Coursera DeepLearning AI TensorFlow Developer Certificate"},
                         {id : 5, img : courseraML, title : "Coursera Machine Learning Certificate"},
                         {id : 6, img : dicodingGit, title : "Dicoding Git and Github Certificate"}];

export default function Certificate() {
  return (
    <>
        <div className={style.certificate} id='certificate'>
            <h2 className={style.title}>Certificate</h2>
            <div className={style.certificate_container}>
                {certificateList.map(certificate => <AchievementCard key={certificate.id} props={certificate}/>)}
            </div>
        </div>
    </>
  )
}
