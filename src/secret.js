const _ = require('lodash');

/**
 * Retrieves API keys from environment variables.
 * Supported environment variables:
 * - INFOOOZE_UA_KEY: Comma-separated list of UserAgent API keys
 * - INFOOOZE_EM_KEY: Comma-separated list of Email validation API keys
 * - INFOOOZE_CMS_KEY: Comma-separated list of CMS detection API keys
 * - INFOOOZE_VT_KEY: Comma-separated list of VirusTotal API keys
 */
const secrets = {
  ua: process.env.INFOOOZE_UA_KEY ? process.env.INFOOOZE_UA_KEY.split(',') : [],
  em: process.env.INFOOOZE_EM_KEY ? process.env.INFOOOZE_EM_KEY.split(',') : [],
  cms: process.env.INFOOOZE_CMS_KEY ? process.env.INFOOOZE_CMS_KEY.split(',') : [],
  vt: process.env.INFOOOZE_VT_KEY ? process.env.INFOOOZE_VT_KEY.split(',') : [],
};

const key = (type) => {
  const pool = secrets[type];
  if (pool && pool.length > 0) {
    return _.sample(pool);
  }
  // Return empty string or handle missing key in callers
  // Most callers use it in headers, so empty string might just result in 401/403
  return '';
};

module.exports = key;
