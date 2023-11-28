import dial_x1_bin from './dial-x1.bin?url';
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
			"name": "dial",
			"translation": [
				0.42880767583847046,
				0.041506871581077576,
				0.40517285466194153
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
			"name": "tv.005",
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
			"count": 2133,
			"max": [
				0.049392521381378174,
				0.049584172666072845,
				0.005490332841873169
			],
			"min": [
				-0.04951751232147217,
				-0.04932587593793869,
				-0.024906694889068604
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 2133,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 2133,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 10980,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 12570,
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
			"byteLength": 12572,
			"uri": dial_x1_bin
		}
	]
}