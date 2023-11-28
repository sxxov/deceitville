import screen_bin from './screen.bin?url';
import SMPTE_Color_Bars_jpg from './SMPTE_Color_Bars.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_emissive_strength"
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
			"name": "screen"
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 0
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 69
				}
			},
			"name": "screen",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.5
			}
		}
	],
	"meshes": [
		{
			"name": "screen",
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
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "SMPTE_Color_Bars",
			"uri": SMPTE_Color_Bars_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 4,
			"max": [
				0.214926615357399,
				0.23379047214984894,
				0.33821120858192444
			],
			"min": [
				-0.43236252665519714,
				-0.2222391813993454,
				0.3382110893726349
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 4,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 4,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 6,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 173,
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
			"byteLength": 176,
			"uri": screen_bin
		}
	]
}