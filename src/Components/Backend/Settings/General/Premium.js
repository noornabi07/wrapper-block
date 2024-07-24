import React from 'react';
import { AiFillLock } from '../../../../utils/icons';

const Premium = ({ attributes }) => {
  const { shape } = attributes;

  return (
    <div>
      {/* top shaped */}
      {shape?.top?.type || shape?.bottom?.type === "cloud" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {shape?.top?.type || shape?.bottom?.type === "mountain" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {shape?.top?.type || shape?.bottom?.type === "fire" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {shape?.top?.type || shape?.bottom?.type === "sports" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
      {shape?.top?.type || shape?.bottom?.type === "travel" && <div className='premium'>
        <span style={{ color: "#FFC100" }}><AiFillLock /></span>
        <p style={{ marginTop: "10px" }}> <span style={{ color: "#10439F", cursor: "pointer" }}>Upgrade To Pro premium</span> features</p></div>
      }
    </div>
  );
};

export default Premium;