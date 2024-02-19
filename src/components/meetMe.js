export default function MeetMe() {
  return (
    <>
      <section className="section-team section has-icon icon-bottom-left spdtb">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title">Conocenos</h2>
            <p>De momento solo soy yo...</p>
          </div>
          <div className="block-team layout-01">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                {" "}
                {/* Utilizamos la clase mx-auto de Bootstrap */}
                <div className="member-box align-center">
                  <div className="inner">
                    <div className="member-avatar">
                      <div className="avatar-inner">
                        <img src="/assets/images/gut.jpg" alt="Member" />
                        <img
                          src="/assets/images/stick-02.png"
                          alt="Stick"
                          className="stick stick-bottom-right"
                        />
                      </div>
                    </div>
                    <div className="member-content">
                      <h4 className="name">Agustín González Ribas</h4>
                      <div className="position">Dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="icon mx-auto"
          src="/assets/images/asc6.png"
          alt="Image"
        />
      </section>
    </>
  );
}
