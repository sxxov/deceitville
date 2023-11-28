import button_x1_bin from './button-x1.bin?url';
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
			"name": "button",
			"translation": [
				0.3257285952568054,
				-0.1648019701242447,
				0.397135466337204
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
			"name": "tv.002",
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
			"count": 532,
			"max": [
				0.017098546028137207,
				0.017194896936416626,
				0.002243727445602417
			],
			"min": [
				-0.017098456621170044,
				-0.01700212061405182,
				-0.01604631543159485
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 532,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 532,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 2736,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 3416,
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
			"byteLength": 3416,
			"uri": button_x1_bin
		}
	]
}