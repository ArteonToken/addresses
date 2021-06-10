export default async (network = 'mainnet') => {
  const importee = await import(`./addresses/${network}.js`)
  return importee.default
}
