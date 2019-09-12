import axios from 'axios';

const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_mdmms';
// const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_aclgs';
export async function getMdmmsFactory(cdcstm: string) {
  try {
    const res = await axios.get(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

export async function deleteMdmmsFactory(cdcstm: string, nommrb: string) {
  try {
    await axios.delete(`${baseUrlMdmms}/${cdcstm}/${nommrb}`);
    const res = await axios.get(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

export async function editMdmmsFactory(
  cdcstm: string,
  nommrb: string,
  // TODO: any
  mdmm: any,
) {
  try {
    await axios.put(`${baseUrlMdmms}/${cdcstm}/${nommrb}`, mdmm);
    const res = await axios.get(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

// TODO: any
export async function addMdmmsFactory(mdmm: any) {
  try {
    await axios.post(`${baseUrlMdmms}`, mdmm);
    const res = await axios.get(`${baseUrlMdmms}/${mdmm.md_cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}
