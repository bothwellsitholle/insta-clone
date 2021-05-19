import React from 'react';

const Profile = () => {
  return (
    <div style={{maxWidth: '700px', margin: '0px auto'}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '18px 0px',
          padding: 10,
          borderBottom: '1px solid #ccc',
        }}
      >
        <div>
          <img
            style={{ height: 160, width: 160, borderRadius: 80 }}
            src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          />
        </div>
        <div>
          <h4>Bothwell Sithole</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '110%',
            }}
          >
            <h6>12 posts</h6>
            <h6>12 followers</h6>
            <h6>12 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          alt='img'
        />
        <img
          className="item"
          src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          alt='img'
        />
        <img
          className="item"
          src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          alt='img'
        />
        <img
          className="item"
          src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          alt='img'
        />
        <img
          className="item"
          src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          alt='img'
        />
        <img
          className="item"
          src='https://deskby.com/image/customer/deskby-andri1615387440.jpg'
          alt='img'
        />
      </div>
    </div>
  );
};

export default Profile;
