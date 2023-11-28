import dial_bin from './dial.bin?url';
import Image_2_jpg from './Image_2.jpg?url';
import Image_1_jpg from './Image_1.jpg?url';
import Image_0_jpg from './Image_0.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "dial.001",
			"translation": [
				0.42882058024406433,
				0.21475286781787872,
				0.4076668620109558
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"name": "tv",
			"normalTexture": {
				"index": 0
			},
			"occlusionTexture": {
				"index": 1
			},
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicRoughnessTexture": {
					"index": 1
				}
			}
		}
	],
	"meshes": [
		{
			"name": "tv.004",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		},
		{
			"sampler": 0,
			"source": 2
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "Image_2",
			"uri": Image_2_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "Image_1",
			"uri": Image_1_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "Image_0",
			"uri": Image_0_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 1943,
			"max": [
				0.03812062740325928,
				0.03816826641559601,
				0.0029963254928588867
			],
			"min": [
				-0.03827139735221863,
				-0.03822478652000427,
				-0.026874691247940063
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1943,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1943,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 10116,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 12119,
			"byteOffset": 0
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 12120,
			"uri": dial_bin
		}
	]
}