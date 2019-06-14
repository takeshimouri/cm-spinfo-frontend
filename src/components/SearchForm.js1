import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _cm_aclgs: [],
      get cm_aclgs() {
        return this._cm_aclgs;
      },
      set cm_aclgs(value) {
        this._cm_aclgs = value;
      },
      _cm_mdmms: [],
      get cm_mdmms() {
        return this._cm_mdmms;
      },
      set cm_mdmms(value) {
        this._cm_mdmms = value;
      },
      searchKey: [],
    }
  }

  componentWillMount() {
    this.fetchResponse(this.state.searchKey)
  }

  fetchResponse = (searchkey) => {
    // fetch("/_api/cm_aclgs/" + this.state.props.cdsqsk)
    fetch("/_api/cm_aclgs/" + searchkey)
      // fetch("/_api/cm_aclgs/20925836")
      .then(res => res.json())
      .then(resJson => this.setState({
        cm_aclgs: resJson.cm_aclgs,
      })
      )
      .catch((error) => {
        console.error(error);
      })
    fetch("/_api/cm_mdmms/" + searchkey)
      .then(res => res.json())
      .then(resJson => this.setState({
        cm_mdmms: resJson.cm_mdmms,
      })
      )
      .catch((error) => {
        console.error(error);
      })
  }

  handleChange = (e) => {
    this.setState({
      searchKey: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <link rel='stylesheet' href='/stylesheets/style.css' />
        <body>
          <form className="float">
            <input className="form float" type="text" placehosder="読者番号を入力してください" value={this.state.searchKey} onChange={this.handleChange} />
            <input className="cp_btn bottom" type="button" onClick={() => this.fetchResponse(this.state.searchKey)} value="検索" />
          </form>
          <div className="float2 bold">{this.state.cm_aclgs.map(cm_aclg => (
            <div key={cm_aclg.al_idaclg}></div>
            // {cm_aclg.al_nmsqsk} 様の履歴一覧を表示します</div>
          ))}
          </div>
          <h2 className="mtop1">お客様メモ</h2>
              <script src="script.js"></script>
              <table id="table">
                <thead>
                  <tr>
                    <th>更新日</th>
                    <th>内容</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.cm_mdmms.map(cm_mdmm => (
                    <tr key={cm_mdmm.md_idmdmm}>
                      <td>{cm_mdmm.updatedAt}</td>
                      <td>{cm_mdmm.md_txmdmm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2 className="mtop1">書籍購入・セミナー・大会参加履歴</h2>
              <table id="table">
                <thead>
                  <tr>
                    <th>日付</th>
                    {/* <th>読者番号</th> */}
                    <th>請求先顧客名</th>
                    <th>部署名</th>
                    <th>氏名</th>
                    <th>部門</th>
                    <th>売掛No.</th>
                    <th>商品名</th>
                    <th>数量</th>
                    <th>金額</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.cm_aclgs.map(cm_aclg => (
                    <tr key={cm_aclg.al_idaclg}>
                      <td>{cm_aclg.al_dtactv}</td>
                      {/* <td>{cm_aclg.al_cdsqsk}</td> */}
                      <td>{cm_aclg.al_nmsqsk}</td>
                      <td>{cm_aclg.al_nmsqbu}</td>
                      <td>{cm_aclg.al_nmsqtn}</td>
                      <td>{cm_aclg.al_nmactv}</td>
                      <td>{cm_aclg.al_noactv}</td>
                      <td>{cm_aclg.al_txactv}</td>
                      <td>{cm_aclg.al_susury}</td>
                      <td>{cm_aclg.al_kggoke.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
              <script src="https://unpkg.com/vue"></script>
              <script src="ejs.js"></script>
              <script src="script.js"></script>
              <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
        </body>
      </div>
          )
        }
      }
export default connect()(SearchForm);
