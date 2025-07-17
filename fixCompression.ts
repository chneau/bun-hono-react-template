import { Readable, Writable } from "node:stream";
import zlib from "node:zlib";

const transformMap = {
	deflate: zlib.createDeflate,
	"deflate-raw": zlib.createDeflateRaw,
	gzip: zlib.createGzip,
};

Object.assign(globalThis, {
	CompressionStream: class CompressionStream {
		constructor(format: keyof typeof transformMap) {
			const handle = transformMap[format]();
			Object.assign(this, {
				readable: Readable.toWeb(handle),
				writable: Writable.toWeb(handle),
			});
		}
	},
});
