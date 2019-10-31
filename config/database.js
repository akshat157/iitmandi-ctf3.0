module.exports = {
	// 'url' : `mongodb://${process.env.database_username}:${process.env.database_password}@${process.env.database_address}/${process.env.database_name}`
	'url' : `${ process.env.DATABASE_URI }`
}
