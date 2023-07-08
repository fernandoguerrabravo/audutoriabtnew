/* eslint-disable no-return-await */
import  HttpClient  from '../helpers/providers.helper';

class FileProvider {
	httpClient = HttpClient;


	static async sendFiles(files) {
		const formData = new FormData();
		files.forEach(formData.append)
		return await new FileProvider().httpClient.post(
			'https://apiecl.com/uploaddocuments?id_seller=amazon|amzn1.account.AHG4S7Q35E4KB5DZGK6BENXDZ6IQ',
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			}
		)
	}

	async sendProfile(file, user) {
		const formData = new FormData();
		formData.append('file', file);
		return await this.httpClient.post(
			`https://apiecl.com/uploaddocuments?id_seller=mybt-auditoria/pdi`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					'origin':'x-requested-with',
					'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
					'Access-Control-Allow-Origin': '*'
				},
			}
		);
	}  

	async sendProduct(file, clave) {
		const formData = new FormData();
		formData.append('file', file);
		return await this.httpClient.post(
			`https://apiecl.com/uploaddocuments?id_seller=${clave}`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
					'origin':'x-requested-with',
					'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
					'Access-Control-Allow-Origin': '*'
				},
			}
		);
	}  

	async submitFiles(files, refId, sku) {
		return await this.httpClient.post(`https://apiecl.com/uploaddocuments?id_seller=amazon|amzn1.account.AHG4S7Q35E4KB5DZGK6BENXDZ6IQ`, files);
	}

	async getFiles(refId, sku) {
		return await this.httpClient.get(`https://eclapi.com/sandbox/file/list?refId=${refId}&sku=${sku}`);
	}
}

export default FileProvider;
